class VideoObjectSchema
{
  constructor(cfg = {}) {
    this.el = cfg;
    this.data = {};
    this.transcript = '';
    this.apiKey = 'LrKW_o1jQE9OGp0kFDreeYJNaSKjoHty';
    this.loggingPrefix = "| video |";
    this.isFullEpisode = $('.video-playr__video__embed').attr('data-full-episode') == 'true';
    this.initialize();
  }

  initialize() {
    // convert element's data attributes into object properties
    [].forEach.call(this.el.attributes, (attr) => {
      if (/^data-/.test(attr.name)) {
        let camelCaseName = attr.name.substr(5).replace(/-(.)/g, function (key, value) {
          return value.toUpperCase();
        });
        let valueWithDoubleQuotesReplaced = attr.value.replace(/"/g,"'")
        this.data[camelCaseName] = valueWithDoubleQuotesReplaced;
      }
    });

    // need Brightcove ID for API call
    if(this.data.vendorId) this.fetch3PlayData();
  }

  fetch3PlayData() {
    const timeLimit = 250;
    let expired = false;

    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        expired = true;
        this.log('3Play API timed out');
        reject(new Error('Request timed out'));
      }, timeLimit);

      fetch(`https://static.3playmedia.com/files/${this.data.vendorId}/transcript.txt?apikey=${this.apiKey}&usevideoid=1`)
      .then(response => {
        clearTimeout(timeout);
        if(!expired) {
          response.text().then(transcript => {
              this.transcript = transcript;
              resolve(response);
          });
        }
      })
      .catch(err => {
        clearTimeout(timeout);
        // rejection already happened with setTimeout
        if(expired) return;
        // reject with error
        reject(err);
      });
    })
    .then(() => {
      // request success, no timeout
      if(this.transcript && this.transcript.charAt(0) != '{') this.data.transcript = this.transcript.replace(/\r?\n|\r/g, "").replace(/"/g,"'");
    })
    .then(() => {
      this.appendScript();
    })
    .catch(err => {
      // response error, request timeout or runtime error
      this.log('3Play API failure');
      this.appendScript();
    });

  }

  appendScript() {
    // add JSON-LD to new script tag in <head>
    let embedScript = document.createElement('script');
    embedScript.setAttribute('type','application/ld+json');
    embedScript.innerHTML = this.isFullEpisode ? this.freeFullEpisodeTemplate() : this.tagTemplate();
    document.head.appendChild(embedScript);
    // this.log(`JSON-LD embedded, transcript ${(this.data.transcript ? '' : 'not ')}found`);
  }

  tagTemplate() {
    return `
      {
        "@context": "http://schema.org",
        "@type": "VideoObject",
        "@id": "${this.data.id}",
        "name": "${this.data.name}",
        "description": "${this.data.description}",
        "thumbnailUrl": "${this.data.thumbnailUrl}",
        "uploadDate": "${this.data.uploadDate}",
        "duration": "${this.data.duration}",
        "embedUrl": "${this.data.embedUrl}"${this.data.transcript ? ',' : ''}
        ${this.data.transcript ? `"transcript": "${this.data.transcript}"` : ''}
      }`;
  }

  freeFullEpisodeTemplate() {
    return `
      {
        "@context": "http://schema.org",
        "@type": 'TVEpisode',
        "@id": "${this.data.id}",
        "name": "${this.data.name}",
        "description": "${this.data.description}",
        "video" : {
          "@type": "VideoObject",
          "thumbnailUrl": "${this.data.thumbnailUrl}",
          "uploadDate": "${this.data.uploadDate}",
          "duration": "${this.data.duration}",
          "embedUrl": "${this.data.embedUrl}"${this.data.transcript ? ',' : ''}
          ${this.data.transcript ? `"transcript": "${this.data.transcript}"` : ''}
        }
      }`;
  }

  log(msg) {
    console.log(`${this.loggingPrefix} ${msg}`);
  }
}

export default VideoObjectSchema;

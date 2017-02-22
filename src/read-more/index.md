--- 
name: Read More Read Less 
collection: components 
--- 

# Read More 

Read More/Read Less is a reusable widget that allows you to hide and then reveal longer pieces of text by clicking on a Read More button. The text that is revealed is given a class
name of "read-more". The Read More button will toggle between two modes, switching the Label accordingly. This is actually achieved by truncating the initial text at the first space, and appending either "More" or "Less".

<div class="about-bio  js-read-more">
  <div class="about-bio__person">
  <picture>
    <source media="(max-width: 767px)" srcset="http://www.sho.com/assets/images/sho7/about/mblank_bio--small.jpg">
    <source srcset="http://www.sho.com/assets/images/sho7/about/mblank_bio.jpg">
    <img alt="Matthew Blank" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
  </picture>
  </div>
  <div class="about-bio__details">
    <h2 class="about-bio__name">Matthew C. Blank</h2>
    <p class="about-bio__title">Chairman, Showtime Networks Inc.</p>
    <p class="about-bio__description">MATTHEW C. BLANK has made a significant and indelible mark on the cable television industry in a career spanning over three decades. Blank has been with Showtime Networks Inc. (SNI) since 1988, assuming the position of President and Chief Operating Officer in 1991, followed by President and CEO, and then Chairman and CEO in 1995. Prior to that, he served as Executive Vice President, Marketing, where he oversaw all of the networks' consumer marketing, creative services and public relations functions. Before joining Showtime Networks, Blank worked for Home Box Office Inc. for 12 years, departing as Senior Vice President of Consumer Marketing.
       </p><div class="read-more__content">
         <p class="about-bio__description">During his tenure, Blank has helped transform SHOWTIME into one of the most successful networks in the TV industry. Under his leadership, Showtime Networks has grown from three premium networks, SHOWTIME, THE MOVIE CHANNEL and FLIX, to include 27 digital channels. Last year, SNI launched a new stand-alone streaming service now available through Amazon, Apple®, Google and Roku, as well as through Amazon Prime Video, Hulu and Sony PlayStation Vue. SNI has also been a champion for and early adopter of the latest technologies, such as High Definition and Subscription Video on Demand (SVOD), providing subscribers with an enhanced viewing experience, along with more choice, convenience and value.</p>

        <p class="about-bio__description">Blank is active in numerous industry organizations. He currently serves on the Board of Directors of the National Cable Television Association (NCTA) and The Cable Center. In 2013, he was honored by the Center for Communication with the Dr. Frank Stanton Award for Excellence in Communications. He was inducted into Broadcasting and Cable magazine's Hall of Fame in 2008 and the Cable Center Hall of Fame in 2009. He has garnered numerous industry awards, including the NCTA's top honor, the Vanguard Award for Leadership in 2008. From CTAM (the Cable and Telecommunications Association for Marketing) in 2003, Blank received the Grand TAM Award, that organization's highest honor. In March 2004, he was honored by Cable Positive with the Joel A. Berger Award for his contribution to the fight against AIDS.</p>

        <p class="about-bio__description">Blank has also been honored by a number of other non-profit organizations. In 2001, he was the recipient of People for the American Way Foundation's prestigious "Spirit of Liberty" award at its 17th annual gala. In 2003, he was honored with the UJA-Federation of NY's Entertainment Media &amp; Communications Division Award, and in 2004 he was presented with the Lifetime Visionary Award by the Israel Film Festival. In 2006, The T. Howard Foundation honored him for his and Showtime Networks' efforts in support of diversity. In 2007, Blank was honored by The Innocence Project for the SHOWTIME production of the award-winning documentary AFTER INNOCENCE, which made a significant contribution to advancing an understanding of the plight of the wrongfully convicted.
        Blank has been a Trustee of the Harlem Children's Zone for almost 20 years. He also serves as a Trustee of the Museum of the Moving Image, and is a member of the Board of Directors of the Manhattan Theatre Club.</p>

        <p class="about-bio__description">Blank is a graduate of the University of Pennsylvania's Wharton School of Business and holds an M.B.A. from Baruch College. He resides in New York City with his wife, Susan McGuirk. </p>
      </div>
    <div class="read-more"><a class="read-more__toggle">Read More</a></div>
  </div>
</div>

```
<div class="js-read-more read-more-example">
  <h2>Matthew Cc. Blank</h2>
  <p>Chairman, Showtime Networks Inc.</p>
  <p>BLANK has made a significant and indelible mark on the cable television industry in a career spanning over three decades. Blank has been with Showtime Networks Inc. (SNI) since 1988, assuming the position of President and Chief Operating Officer in 1991, followed by President and CEO, and then Chairman and CEO in 1995. Prior to that, he served as Executive Vice President, Marketing, where he oversaw all of the networks' consumer marketing, creative services and public relations functions. Before joining Showtime Networks, Blank worked for Home Box Office Inc. for 12 years, departing as Senior Vice President of Consumer Marketing.
    <div class="read-more__content">
      <p>During his tenure, Blank has helped transform SHOWTIME into one of the most successful networks in the TV industry. Under his leadership, Showtime Networks has grown from three premium networks, SHOWTIME, THE MOVIE CHANNEL and FLIX, to include 27 digital channels. Last year, SNI launched a new stand-alone streaming service now available through Amazon, Apple&reg;, Google and Roku, as well as through Amazon Prime Video, Hulu and Sony PlayStation Vue. SNI has also been a champion for and early adopter of the latest technologies, such as High Definition and Subscription Video on Demand (SVOD), providing subscribers with an enhanced viewing experience, along with more choice, convenience and value.</p>
    </div>
    <div class="read-more"><a class="read-more__toggle" href="#">Read More</a></div>
</div>
```

 
 
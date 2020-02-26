---
name: Email Signup
collection: components
---

# Email Signup
*if you don't see anything, you might need to clear your cookies*

Note: the id="email-signup-widget" is present to allow for anchor links.

<div id="email-signup-widget"
  class="js-react-email-signup"
  data-pub-id="46169"
  data-headline="GET SHOWTIME EMAIL UPDATES"
  data-cta="Sign Up"
  data-tracking-context="styleguide"
  data-host="http://localhost:8080"
>
</div>

```
<div id="email-signup-widget"
  class="js-react-email-signup"
  data-pub-id="46169" <!-- REQUIRED -->
  data-headline="GET SHOWTIME EMAIL UPDATES" <!-- OPTIONAL - this is the default if ommitted -->
  data-cta="Sign Up" <!-- OPTIONAL - this is the default if ommitted -->
  data-tracking-context="styleguide" <!-- OPTIONAL - 'email signup:' is the default if ommitted -->
  data-host="http://localhost:4000" <!-- OPTIONAL - '' (for relative path) is the default if ommitted -->
>
</div>
```

### Marketing Feed Sign Up (no js)

<section class="section">
  <div class="section--inner">
    <div id="email-signup-widget" class="email-signup email-signup--marketing-feed">
      <div class="email-signup__inner">
        <div class="email-signup__validation" style="display:none;">
          <span class="email-signup__validation--error"></span>
        </div>
        <form name="email-signup-form" id="email-signup-form" action="/network-feed/home">
          <div class="email-signup__form-fields">
            <div class="email-signup__contact-input">
              <p class="email-signup__label">contact name</p>
              <input class="input-box input-box-contact" id="contact" name="contact" type="text" value="" autocomplete="off">
            </div>
            <div class="email-signup__affiliation-input">
              <p class="email-signup__label">company/affiliation</p>
              <input class="input-box input-box-affiliation" id="affiliation" name="affiliation" type="text" value="" autocomplete="off">
            </div>
            <div class="email-signup__email-input">
              <p class="email-signup__label">email</p>
              <input class="input-box input-box-email" id="email-address" name="email" type="text" value="" autocomplete="off">
            </div>
            <div class="email-signup__tos-input">
              <input class="check-box" id="tos-agree" name="accepts_terms" type="checkbox">
              <span>I agree to the <a href="/about/terms">terms</a> of the SHOWTIME Network Feed and Promotional Video MRSS Feed.
            </div>
          </div><!-- /form-fields -->
          <button class="email-signup__submit-btn" id="submit" data-context="">
            Request Access
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
<style type="text/css">
  .site-sidebar,
  .site-sidebar-toggle {
    display: none;
  }

  .simplified-global-navigation {
    position: absolute;
    top: 0;
    z-index: 9999;
  }

  .site-main {
    padding: 0;
  }

  .site-content {
    max-width: none;
  }
</style>
<jsp-partials>styleguide/email-signup/_email_signup.jsp.md</jsp-partials>

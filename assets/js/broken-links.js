var links = document.querySelectorAll('a[href]');
var linkReport = [];
var linksChecked = 0;

// put all internal links into an array
// for each link load the page and select the body and create a new document for it and get the links on the pages again
// until the array is empty and every link got checked

// TODO check if link is internal or external

class BrokenLinks {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
    this.errors = [];
    this.brokenLinks = {};
    this.visitedLink = {};
    this.options = {
      // method: 'HEAD',
      mode: 'cors',
      //mode: 'no-cors',
      redirect: 'follow',
    };

    this.findLinks(this.rootUrl);
    console.log(this.errors);
    this.showErrors();
  }
  showErrors() {
    console.debug('errors', this.errors);
  }

  async findLinks(url, prevUrl = null) {
    if (!this.visitedLink[url]) {
      this.visitedLink[url] = 1;
    }

    const response = await fetch(url);
    const html = await response.text();
    const temp = document.createElement('html');
    temp.innerHTML = html;
    const links = temp.querySelectorAll('a');

    links.forEach((link) => {
      let currentLink = link.getAttribute('href');

      if (this.isInvalidHref(currentLink)) {
        return;
      }

      currentLink = this.getAbsoluteLink(currentLink);
      console.log('CURRENT LINK ->', currentLink);
      if (this.isValidLink(currentLink) === false) return;

      if (this.isExternal(currentLink)) {
        this.brokenLinks[currentLink] = 'external';
        return;
      }

      fetch(currentLink, this.options)
        .then((response) => {
          this.handleResponse({ response, currentLink, url });
        })
        .catch((error) => {
          this.handleError({ error, currentLink, url });
        });

      if (!this.visitedLink[currentLink]) {
        this.findLinks(currentLink, url);
      }
    });
  }

  isInvalidHref(href) {
    return href == null || href.length <= 1 || this.visitedLink[href] || href.includes('index.html');
  }

  handleResponse(data) {
    const { response, currentLink, previousLink } = data;

    if (response.status >= 300) {
      this.brokenLinksk[currentLink] = 'broken';
      this.errors.push({
        currentLink: currentLink,
        response,
        previousLink: previousLink,
      });
    }
  }

  handleError(data) {
    const { error, currentLink, url: previousLink } = data;
    this.brokenLinks[currentLink] = 'broken';
    this.errors.push({
      currentLink: currentLink,
      error,
      previousLink: previousLink,
    });
  }

  isValidLink(url) {
    const regex = /^(http(s)?:\/\/)?[\w.-]+(:\d+)?(\/[\w\.-]*)*$/g;
    return url.match(regex) ? true : false;
  }

  isAbsoluteLink(href) {
    return href.indexOf('http://') === 0 || href.indexOf('https://') === 0 ? href : null;
  }

  isExternal(url) {
    const origin = document.location.origin;
    // const regex = new RegExp(`^(${origin})?`);
    return url.includes(origin) ? false : true;
  }

  getAbsoluteLink(href) {
    if (this.isAbsoluteLink(href) == null) {
      if (!href.includes('/')) {
        href = '/' + href;
      } // Some hrefs miss the backslash
      var link = document.createElement('a');
      link.href = href;
      return link.href;
    } else {
      return href;
    }
  }
}

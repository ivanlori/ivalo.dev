class CookieBanner {
  private $cookieBanner = document.querySelector('.js-cookie-banner') as HTMLElement;
  private cookieName = 'cookieBanner';

  setCookie = () => sessionStorage.setItem(this.cookieName, 'true');

  hide = () => this.$cookieBanner.classList.add('d-hide');

  show = () => this.$cookieBanner.classList.remove('d-hide');

  handleClick = () => this.$cookieBanner.addEventListener('click', () => this.hide());

  init = () => {
    this.handleClick();
    return sessionStorage.getItem(this.cookieName) ? this.hide() : this.show();
  }
}

export default CookieBanner;
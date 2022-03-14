function Footer(){
    return <footer className="page-footer  blue-grey darken-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/DmutrukTaras/react-course-project-shop">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer}
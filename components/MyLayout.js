const Layout = (props) => (
  <div className="layoutBorder">
    {props.children}
    <style jsx>{`
            .layoutBorder {
              width: 100%;
              height: 100%;
            }                   
        `}</style>
  </div>
)

export default Layout
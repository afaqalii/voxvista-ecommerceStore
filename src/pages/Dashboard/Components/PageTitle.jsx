// this page title as the names suggest will be used at the top of each dashboard page to display which page it is
const PageTitle = ({children}) => {
  return (
    <div className="text-4xl font-extrabold text-white mb-2">{children}</div>
  )
}

export default PageTitle
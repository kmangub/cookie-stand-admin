export default function Footer(props){
    return(
        <footer className="flex p-4 bg-green-500">
        <p>{props.reportTableArray.length} Locations World Wide</p>
        </footer>
      )
}
import Footer from "./footer"
import Header from "./header"

const FiexedLayout = ({children})=>{

    return <>
    <Header/>
    {children}
    <Footer/>
    </>
}

export default FiexedLayout
import Footer from "./footer"
import Header from "./header"

const FiexedLayout = ({children})=>{

    return <>
    <Header />
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {children}
    </div>
    <Footer/>
    </>
}

export default FiexedLayout
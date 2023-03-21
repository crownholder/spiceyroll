

export default function Header(){
    const styleHead = {
        background: 'orange',
        position: 'fixed',
        top: '0',
        margin: '0',
        width: '100%',
        color: 'white',
        paddingBottom: '17px'
    }
    const styleSpan = {
        color: '#1887f2',
        
    }
    const styleDiv={
        marginBottom: '10px',
        marginLeft: '-5px'
    }
  

    return (
        <div style={styleDiv}>
            <h1 style={styleHead}>Spicey<span style={styleSpan}>R</span>oll</h1>
            
        </div>
        
    )
}


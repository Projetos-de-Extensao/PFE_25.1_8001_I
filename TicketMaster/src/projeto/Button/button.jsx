export default function Button({style, children, onClick}) {
    return (
        <button style={style} onClick={onClick} className='button-default'>
           {children}
        </button>
    )
}

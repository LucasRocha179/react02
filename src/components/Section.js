import './Section.css';

function MySection({children}) {
    return(
        <div className='section'>
            {children}
        </div>
    )
};

export default MySection;
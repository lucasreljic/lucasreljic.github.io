import './SlideBox.css';

const SlideBox = (props) => {
    return (
        <>
            <div className="each-slide-effect">
                <div className={props.photo}></div>
            </div>
            <div className='caption'>
            <a href={props.link} className="caption">{props.children}</a>
            </div>
        </>
    );
}

export default SlideBox;
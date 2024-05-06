import { Container } from "react-bootstrap"
import './Text.css'
const Text = (props) => {
    return (
        <Container fluid className="textBox">
            <div >
            <p className="text" style={props.style}>
                {props.children}
            </p>
            </div>
        </Container>
    );
}
export default Text;
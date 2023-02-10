import { Container } from "react-bootstrap"
import './Text.css'
const Text = (props) => {
    return (
        <Container fluid>
            <div className="textBox">
            <p className={props.className} style={props.style}>
                {props.children}
            </p>
            </div>
        </Container>
    );
}
export default Text;
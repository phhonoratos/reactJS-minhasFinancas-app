function FormGroup(props) {
    return (
        <div class="form-group mb-3">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormGroup;
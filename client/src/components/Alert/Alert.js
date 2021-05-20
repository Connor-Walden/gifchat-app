
function Alert({show, title, content, closeModalFunc}) {
    return (
        <div>
            <div className={show} style={show=='modal fade' ? {} : { display: 'block', paddingRight: '17px' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => closeModalFunc()}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alert;
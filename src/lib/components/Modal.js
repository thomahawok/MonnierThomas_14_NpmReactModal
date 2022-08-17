import ReactDOM from 'react-dom'
import './StyleModal.css'

const Modal = ({ isShowing, hide, text }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modalOverlay">
            <div className="modalOverlay__wrapper">
              <div className="modalOverlay__wrapper__header">
                <h4>{text}</h4>
                <button
                  type="button"
                  className="modalOverlay__wrapper__header__closeButton"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById('modal-root')
      )
    : null

export default Modal

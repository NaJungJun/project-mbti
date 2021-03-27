import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SnsShareButton from '../components/SnsShareButton';

function Modal(
    {   className,
        onClose,
        maskClosable,
        closable,
        visible,
        children,
        imgSrc,
        artistName,
        startURL
    }) {
    const currentURL = 'https://mbti-artist.netlify.app/';
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    async function copyToClipboard() {
        const copyText = document.getElementById("url-textarea");
        copyText.select();
        document.execCommand('Copy');
        alert('복사되었습니다.');
    }

    return (
        <>
            <ModalOverlay visible={visible} />

            <ModalWrapper 
                className={className} 
                tabIndex="-1" 
                visible={visible}
                onClick={maskClosable ? onMaskClick : null}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    {children}
                    <div className="link-copy-container">
                        <textarea id="url-textarea" className="url-textarea" type="text" value={currentURL} />
                        <button className="link-copy-btn" type="button" onClick={copyToClipboard}>copy</button>
                    </div>
                    <SnsShareButton name="twitter" />
                    <SnsShareButton name="kakao" imgSrc={imgSrc} artistName={artistName}/>
                    <SnsShareButton name="facebook" />
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

Modal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`

export default Modal;
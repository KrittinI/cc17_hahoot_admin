import Modal from 'react-modal';

Modal.setAppElement('#modal');

export default function AdminBannedModal({
  isOpen,
  onRequestClose,
  onConfirm,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Confirm Modal'
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Are you sure you want to ban this user?</h2>
      <div>
        <button onClick={onConfirm}>OK</button>
        <button onClick={onRequestClose}>Cancel</button>
      </div>
    </Modal>
  );
}

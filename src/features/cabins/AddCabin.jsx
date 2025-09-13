import { useState } from 'react';

import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((prev) => !prev)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(close)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(close)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;

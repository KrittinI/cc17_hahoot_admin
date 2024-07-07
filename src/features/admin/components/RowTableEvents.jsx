import { useState } from "react";
import Modal from "../../../components/Modal";
import BannedUser from "../../../components/BannedUser";
import { LockIcon, UnlockIcon } from "../../../icons/Banned";

const gridMap = {
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    10: 'grid-cols-10',
    12: 'grid-cols-12',
}


export default function RowTableEvents({
    item,
    onBanUser,
    onUnBanUser,
    setSelectedUser,
    gridRowTable,
}) {
    const [open, setOpen] = useState(false);

    const handleBanClick = () => {
        setSelectedUser(item);
        setOpen(true);
    };

    const handleConfirmBan = () => {
        onBanUser(item);
        setOpen(false);
    };

    const handleConfirmUnBan = () => {
        onUnBanUser(item);
        setOpen(false);
    };

    return (
        <div className={`grid ${gridMap[gridRowTable]} text-center py-4 border-b`}>
            <div className="col-span-1 text-font-body">{item[0]}</div>
            <div className="col-span-3 text-font-body">{item[1]}</div>
            <div className="col-span-2 text-font-body">{item[2]}</div>
            <div className="col-span-3 text-font-body">{item[3]}</div>
            <div className="col-span-1 text-font-body">{item[4]}</div>
            <div role="button" className="col-span-2 text-font-body ">
                <div className="flex justify-center items-center text-center ">{item[5] ? <LockIcon /> : <UnlockIcon />}</div>
            </div>
            <div className="grid gap-4">
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={
                        item.detail5 === "Active"
                            ? `Are you want to Banning this user`
                            : `Are you want to Unbanning this user`
                    }
                >
                    <BannedUser
                        onConfirm={
                            item.detail5 === "Active" ? handleConfirmBan : handleConfirmUnBan
                        }
                        onCancel={() => setOpen(false)}
                        isActive={item.detail5 === "Active"}
                    />
                </Modal>
            </div>
        </div>
    );
}

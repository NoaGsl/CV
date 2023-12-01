import Image from "next/image";
import GitImg from "@/public/git.png";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ModalStyle from "./ModalStyle";
import { Box } from "@mui/material";

export default function Git() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:cursor-pointer">
            <Image onClick={handleOpen} src={GitImg} alt="Git" />
            <Modal open={open} onClose={handleClose}>
                <Box sx={ModalStyle()}>
                    <h2>Git</h2>
                    <p>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>
                </Box>
            </Modal>
        </div>
    );
}
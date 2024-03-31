import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styles from "./mobileDrawer.module.css";

const MobileDrawer = ({ toggleDrawer, open }: { toggleDrawer: (open: boolean) => () => void, open: boolean }) => {
    return (
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <div className={styles.drawerContent}>
                <Link to="/" className={styles.drawerItem}>
                    <HomeIcon sx={{ fontSize: 25, marginRight: 2 }} />
                    Home
                </Link>
                <Link to="/shop" className={styles.drawerItem}>
                    <ShopIcon sx={{ fontSize: 25, marginRight: 2 }} />
                    Shop
                </Link>
                <Link to="/about" className={styles.drawerItem}>
                    <InfoIcon sx={{ fontSize: 25, marginRight: 2 }} />
                    About
                </Link>
                <Link to="/contact" className={styles.drawerItem}>
                    <LocalPhoneIcon sx={{ fontSize: 25, marginRight: 2 }} />
                    Contact
                </Link>
            </div>
        </Drawer>
    )
}

export default MobileDrawer;

import { createPortal } from "react-dom";
import { FC, PropsWithChildren, memo } from "react";
import Stack from "@mui/material/Stack";
import styles from "./Modal.module.css";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type TModalProps = {
  title?: string;
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<TModalProps>> = memo(
  ({ children, onClose, title }) => {
    // const handleCloseByEscape = useCallback(
    //   (e: KeyboardEvent) => {
    //     e.preventDefault();
    //     if (e.key === "Escape") {
    //       onClose();
    //     }
    //   },
    //   [onClose]
    // );

    // useEffect(() => {
    //   window.addEventListener("keydown", handleCloseByEscape);

    //   return () => {
    //     window.removeEventListener("keydown", handleCloseByEscape);
    //   };
    // }, [onClose, handleCloseByEscape]);

    return createPortal(
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: 20,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          transitionDuration: "300ms",
          transitionProperty: "all",
          transitionTimingFunction: "linear",
        }}
      >
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 30,
            textAlign: "center",
            width: { xs: "85%", md: "40%" },
            minHeight: { xs: "15rem", md: "20rem" },
            maxHeight: { xs: "30rem", md: "55rem" },
            borderRadius: "1.5rem",
            backgroundColor: "rgb(241 245 249)",
          }}
        >
          {title && (
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "24px",
                lineHeight: "2rem",
                fontWeight: 600,
              }}
              className={styles.title}
            >
              {title}
            </Typography>
          )}
          <CloseIcon
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "1rem",
              transition: "color 600ms ease",
              fontSize: "1.8rem",
              right: "1rem",
              cursor: "pointer",
              color: "gray",
              "&:hover": {
                color: "black",
              },
            }}
          />
          <main className={styles.mainContent}>{children}</main>
        </Stack>
        <div onClick={onClose} className={styles.overlay}></div>
      </Stack>,
      document.getElementById("modal") as HTMLElement
    );
  }
);

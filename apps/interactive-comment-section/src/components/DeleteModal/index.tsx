import useMediaQuery from "use-media-query/react";
import common from "./DeleteModal.common.styles";
import mobile from "./DeleteModal.mobile.styles";
import tablet from "./DeleteModal.table.styles";
import desktop from "./DeleteModal.desktop.styles";
import useAppStore, { AppModule } from "../../hooks/useAppStore.hook";
import { commentModule } from "../../hooks/useCommentsStore.hook";

const DeleteModal: React.FC = () => {
  const modalState = useAppStore((app) => app.deleteModal);
  const styles = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });

  if (!modalState.active) {
    return null;
  }

  return (
    <div css={[common, styles]}>
      <div className="delete-modal__content">
        <strong className="delete-modal__content__title">Delete comment</strong>
        <p className="delete-modal__content__desc">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="delete-modal__content__activate">
          <button
            className="delete-modal__content__activate__cancel-btn"
            onClick={() => AppModule.toggleDeleteModal()}
          >
            NO, CANCEL
          </button>
          <button
            className="delete-modal__content__activate__delete-btn"
            onClick={() => {
              if (modalState.parentCommentId) {
                commentModule.deleteReply(
                  modalState.parentCommentId,
                  modalState.commentId,
                );
              } else {
                commentModule.deleteComment(modalState.commentId);
              }
              AppModule.toggleDeleteModal({
                parentCommentId: undefined,
                commentId: -1,
              });
            }}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

import PlusIcon from "../../assets/images/icon-plus.svg?react";
import MinusIcon from "../../assets/images/icon-minus.svg?react";
import DeleteIcon from "../../assets/images/icon-delete.svg?react";
import EditIcon from "../../assets/images/icon-edit.svg?react";

const Comment: React.FC = () => {
  return (
    <div>
      <div>
        <button aria-label="plus score">
          <PlusIcon />
        </button>
        {`score`}
        <button aria-label="minus score">
          <MinusIcon />
        </button>
      </div>
      <div>
        <div>
          <img src="" alt="아이콘" />
          <div>you</div>
          <span>created dates</span>
        </div>
        <p>
          <span>@nickname</span>
          Comments
        </p>
      </div>
      <div>
        <button aria-label="delete comment">
          <DeleteIcon />
        </button>
        <button aria-label="edit comment">
          <EditIcon />
        </button>
      </div>
    </div>
  );
};

export default Comment;

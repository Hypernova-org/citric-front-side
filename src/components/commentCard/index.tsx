import { Comment } from "assets/images/icons";

const CommentCard = (props: any) => {
  return (
    <div className="comment_item cursor-pointer" onClick={props.onClick}>
      <Comment />
      <p className="comment_desc">{props.description}</p>
      <p className="comment_more">Batafsil ko'rish</p>
      <div className="comment_author">
        <img
          className="comment_author__img"
          src={props.image[0].medium}
          alt="citric.uz"
        />
        <p className="comment_author__name">{props.author}</p>
      </div>
    </div>
  );
};

export default CommentCard
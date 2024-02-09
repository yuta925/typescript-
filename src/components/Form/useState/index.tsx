import { FC, ChangeEvent, useState } from "react";
import "./styles.css";

const Form: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");

  // 各項目のエラーメッセージ
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [commentErrorMessage, setCommentsErrorMessage] = useState("");

  // 送信処理
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setFirstNameErrorMessage("");
    setLastNameErrorMessage("");
    setCommentsErrorMessage("");

    const formData = {
      firstName,
      lastName,
      comment,
    };

    // エラーのチェック
    const emptyFirstName = firstName === "";
    const emptyLastName = lastName === "";
    const emptyComments = comment.length < 10;

    if (emptyFirstName) {
      setFirstNameErrorMessage("名を入力してください");
    }
    if (emptyLastName) {
      setLastNameErrorMessage("姓を入力してください");
    }
    if (emptyComments) {
      setCommentsErrorMessage("コメントは10文字以上で入力してください");
    }

    const enableSubmit = !emptyFirstName && !emptyLastName && !emptyComments;

    if (enableSubmit) {
      console.log("submit!!");
      console.log(formData);
    }
  };

  // onchange
  const onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="wrapper">
      <h1>React Form</h1>
      <section className="section">
        <h2>useState Form</h2>
        <p>ReactのuseStateを使用してformを作成した例です。</p>
        <form onSubmit={onSubmit}>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>姓</span>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={onChangeLastName}
              />
            </label>
            {lastNameErrorMessage && (
              <p className="error-message">{lastNameErrorMessage}</p>
            )}
          </div>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>名</span>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChangeFirstName}
              />
            </label>
            {firstNameErrorMessage && (
              <p className="error-message">{firstNameErrorMessage}</p>
            )}
          </div>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>コメント</span>
              <textarea
                onChange={onChangeComment}
                value={comment}
                name="comment"
              />
            </label>
            {commentErrorMessage && (
              <p className="error-message">{commentErrorMessage}</p>
            )}
          </div>
          <div className="submit-button">
            <input type="submit" />
          </div>
        </form>
      </section>
      <p>姓: {lastName}</p>
      <p>名: {firstName}</p>
      <p>コメント: {comment}</p>
    </div>
  );
};

export default Form;

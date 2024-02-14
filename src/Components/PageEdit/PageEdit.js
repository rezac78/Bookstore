import UpdateForm from "../Form/UpdateForm";
import { useBooks } from "../../hooks/useBook";

function PageEdit() {
  const { editBook, showSuccessMessage, SuccessMessage, Message } = useBooks();
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <UpdateForm
        Message={Message}
        SuccessMessage={SuccessMessage}
        showSuccessMessage={showSuccessMessage}
        EditBook={editBook}
      />
    </div>
  );
}
export default PageEdit;

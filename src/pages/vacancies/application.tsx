import { notification } from 'antd'
import { Field } from "formik";
import { useHooks } from 'hooks';
import Container from 'modules/container'
import { Fields } from "components";


const Application = ({ showApplicationModal, applicationModal }: any) => {
  const { t, get } = useHooks();
  
  const ID = get(applicationModal, "data.data._id")
  
  return (
    <div>
      <div className="modal-bottom-section">
        <Container.Form
          name="vacancies"
          url={`vacancies/${ID}`}
          method={"post"}
          fields={[
            {
              name: "name",
              type: "string",
            },
            {
              name: "phone",
              type: "string",
            }
          ]}
          onSuccess={(data, resetForm, query) => {
            showApplicationModal({open:false, data: {}})
            resetForm()
            notification["success"]({
              message: data ? t("Успешно изменен!") : t("Успешно!"),
              duration: 2,
            });
          }}
          onError={(error) => {
            notification["error"]({
              message: get(error, "errorMessage", t("Произошло ошибка!")),
              duration: 2,
            });
            console.log("Error", error);
          }}
        >
          {() => {
            return (
              <div>
                <div className="relative">
                  <label className="payment-input-label">
                    {t("Ismingiz")}
                  </label>
                  <Field
                    component={Fields.Input}
                    className="payment-input mb-[12px] w-full"
                    name="name"
                    type="text"
                    placeholder={t("Ismingizni yozing")}
                    size="large"
                  />
                </div>
                <div className="relative">
                  <label className="payment-input-label">
                    {t("Telefon raqamingiz")}
                  </label>
                  <Field
                    component={Fields.Input}
                    className="payment-input"
                    name="phone"
                    type="number"
                    placeholder={t("+998 ** **-**-**")}
                    size="large"
                  />
                </div>
                <button type="submit" className="submit-form-btn w-full">
                  {t("Ariza qoldirmoq")}
                </button>
              </div>
            );
          }}
        </Container.Form>
      </div>
    </div>
  )
}

export default Application
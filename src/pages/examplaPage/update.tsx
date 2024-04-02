import { Fields } from "components";
import { Field } from "formik";
import { Container } from "modules";
import { Button, Spin } from "antd";
import { useHooks } from "hooks";

const Portfolio = ({ showEditModal, selectedCard }: any): JSX.Element => {
  const { get } = useHooks();

  return (
    <div>
      <Container.Form
        className="w-[360px]"
        url={`/vacancies/${get(selectedCard, "_id")}`}
        method="put"
        fields={[
          {
            name: "title",
            type: "string",
            value: get(selectedCard, "title"),
            required: true,
          },
          {
            name: "description",
            type: "string",
            value: get(selectedCard, "description"),
            required: true,
          },
          {
            name: "price",
            type: "string",
            value: get(selectedCard, "price"),
            required: true,
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["vacancies"] });
          showEditModal(false);
        }}
        onError={(error) => {
          console.log("Error", error);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <div>
              <Field
                component={Fields.Input}
                className="mb-5"
                name="title"
                type="text"
                placeholder="Vakansiya nomi"
                label="Vakansiya nomi"
                size="large"
              />
              <Field
                className="mb-5"
                component={Fields.Input}
                name="description"
                type="text"
                placeholder="Vakansiya haqida"
                label="Vakansiya haqida"
                size="large"
              />
              <Field
                className="mb-5"
                component={Fields.Input}
                name="price"
                type="text"
                placeholder="Maosh"
                label="Maosh"
                size="large"
              />
              <Button
                className="w-full h-auto py-[10px] px-4 bg-[#2196F3] text-white font-bold hover:!text-white"
                htmlType="submit"
              >
                Saqlash
              </Button>
              {!isSubmitting && (
                <div className="flex justify-center">
                  <Spin />
                </div>
              )}
            </div>
          );
        }}
      </Container.Form>
    </div>
  );
};

export default Portfolio;

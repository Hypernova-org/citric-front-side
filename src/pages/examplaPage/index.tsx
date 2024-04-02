import { useState } from "react";
import { Button } from "components";
import { Field } from "formik";
import { Container } from "modules";
import { Spin, Col, Row, Card, Modal, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHooks, usePost } from "hooks";
import Update from "./update";
import Create from "./create";

const Portfolio = () => {
  const { get, queryClient } = useHooks();
  const { mutate } = usePost();

  const [editModal, showEditModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [successed, setSuccess] = useState<boolean>(false);

  const onEdit = (item: object) => {
    showEditModal(true);
    setSelectedCard(item);
  };
  const onDeleteHandler = (id: string) => {
    Modal.confirm({
      title: "Вы действительно хотите удалить вакансию?",
      okText: "да",
      okType: "danger",
      cancelText: "нет",
      onOk: () => deleteAction(id),
    });
  };

  const deleteAction = (id: string) => {
    if (id) {
      mutate(
        { method: "delete", url: `/vacancies/${id}`, data: null },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [`vacancies`],
            });

            notification["success"]({
              message: "Успешно удалена",
              duration: 2,
            });
          },
          onError: (error: any) => {
            notification["error"]({
              message: get(error, "errorMessage", "Произошло ошибка!"),
              duration: 2,
            });
          },
        }
      );
    }
  };
  return (
    <div className="flex">
      <Modal
        open={editModal}
        onOk={() => showEditModal(true)}
        onCancel={() => showEditModal(false)}
        footer={null}
        centered
        width={400}
        destroyOnClose
      >
        <Update {...{ showEditModal, selectedCard }} />
      </Modal>
      <Modal
        open={editModal}
        onOk={() => showEditModal(true)}
        onCancel={() => showEditModal(false)}
        footer={null}
        centered
        width={400}
        destroyOnClose
      >
        <Create {...{ showEditModal, setSuccess, successed }} />
      </Modal>

      <div>
        <Container.All name="vacancies" url="/vacancies">
          {({ items, isLoading }) => {
            return (
              <div>
                <Button
                  title="Create vacancy"
                  isLoading={successed}
                  size="large"
                  onClick={() => showEditModal(true)}
                />
                <Row
                  justify="space-between"
                  className="h-[75vh] overflow-y-auto mt-[15px]"
                >
                  {items.map((card) => {
                    return (
                      <>
                        <Col className="gutter-row mb-5" span={6}>
                          <Card
                            title={get(card, "title")}
                            bordered={false}
                            style={{ width: 260, height: 250, marginRight: 15 }}
                          >
                            <p>{get(card, "description")}</p>
                            <p>
                              <b>Maosh:</b> {get(card, "price")}
                            </p>
                            <div className="btnPanel">
                              <div
                                className="editBtn"
                                onClick={() => onEdit(card)}
                              >
                              </div>
                              <div
                                onClick={() =>
                                  onDeleteHandler(get(card, "_id", ""))
                                }
                                className="deleteBtn"
                              >
                              </div>
                            </div>
                          </Card>
                        </Col>
                      </>
                    );
                  })}
                </Row>
                {!isLoading && (
                  <div className="flex justify-center">
                    <Spin />
                  </div>
                )}
              </div>
            );
          }}
        </Container.All>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import PropTypes from "prop-types";

import InputField from "../../components/form-controls/InputField";
import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./GuestBook.scss";
import { useSnackbar } from "notistack";

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên"),
  wishes: yup.string().required("Vui lòng nhập lời chúc"),
});

function GuestBook(props) {
  const form = useForm({
    defaultValues: {
      name: "",
      wishes: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSubmit = (values) => {
    console.log(values);
    form.reset();
    enqueueSnackbar("cảm ơn bạn đã gửi lời chúc", {
      variant: "success",
    });
  };

  return (
    <div className="GuestBook">
      <Box className="GuestBook-container">
        <Typography variant="h5" className="GuestBook-title">
          Wishes from friends
        </Typography>
        <Typography variant="h4">SỔ LƯU BÚT</Typography>
        <form
          className="GuestBook-form"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <InputField name="name" label="Nhập họ tên*" form={form}></InputField>

          <InputField
            name="wishes"
            label="Nhập lời chúc*"
            form={form}
            rows={4}
          ></InputField>
          <Button type="submit" variant="outlined" color="secondary" center>
            GỬI LỜI CHÚC
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default GuestBook;

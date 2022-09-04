

From: Kanaka C S <kanaka.cs@ahana.co.in> 
Sent: Sunday, September 4, 2022 8:54 PM
To: Naveen Aithal U <naveen.aithal@ahana.co.in>
Subject: Questions

import React, { useState, useEffect } from "react";
import "./Empfeedback.css";
import Axios from "axios";

import Table from "react-bootstrap/Table";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
// import Rating from "./Rating";
import Total from "./Total";

// Rating
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Select Employee Dropdown
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Avatar from "@mui/material/Avatar";
import MuiGrid from "@mui/material/Grid";

const token = sessionStorage.getItem("token");

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            // position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

function Empfeedback() {
  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  const [isShown, setIsShown] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [personName, setPersonName] = React.useState([]);
  const [feedbackEmployeeList, setFeedbackEmployeeList] = useState([]);

  // Questions
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    Axios.get(http://localhost:3001/getQuestions, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log("questions data", response.data[0]);
      let question = JSON.parse(response.data[0].questions);
      setQuestionsData(question);
      console.log(question);
      console.log("resonse", response.data);
    });
  }, []);

  const reporting_manager = sessionStorage.getItem("reporting_manager");
  // console.log("RM", reporting_manager);

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/getFeedbackEmployees/${reporting_manager}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then((response) => {
      console.log(response.data);

      setFeedbackEmployeeList(response.data);
    });
  }, []);

  // const handleChange = (event) => {
  //   setPersonName(event.target.value);
  // };

  // const handleClick = () => {
  //   setIsShown(!isShown);
  // };

  // Dialog
  const handleClickOpen = (value) => {
    console.log(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [index, setIndex] = useState(0);

  const nextQuestion = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevQuestion = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return f(newIndex);
    });
  };

  const checkNumber = (number) => {
    if (number > questionsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return questionsData.length - 1;
    }
    return number;
  };

  return (
    <div>
      <div className="empheading">
        <h2>Feedback</h2>
      </div>
      {/* <div className="body">
        <div className="range">
          <p className="p">Given Feedback: 0 / 8</p>

          <div className="datepicker">
            <p className="p">Select Month Range: </p>
            <Box sx={{ mx: 1 }}></Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["year", "month"]}
                label="From"
                minDate={new Date("2020-03-01")}
                // maxDate={new Date("2030-06-01")}
                value={value1}
                onChange={(newValue) => {
                  setValue1(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} className="date" />
                )}
              />
            </LocalizationProvider>
            <Box sx={{ mx: 2 }}></Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["year", "month"]}
                label="To"
                minDate={new Date("2020-03-01")}
                // maxDate={new Date("2030-06-01")}
                value={value2}
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} className="date" />
                )}
              />
            </LocalizationProvider>
            <Box sx={{ mx: 1 }}></Box>

            <Button variant="text" onClick={handleClick}>
              View
            </Button>
          </div>
        </div> */}
      {isShown && <Total />}

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="xl"
        >
          <DialogTitle>Provide Feedback</DialogTitle>
          <Divider />

          <DialogContent>
            <div>
              <p className="info">
                {questionsData.map((question, key) => {
                  const { id, title, status } = question;
                  console.log("Question inside div", question);
                  return (
                    <div key={key}>
                      <h1>
                        {question.id}. {question.title}
                      </h1>
                    </div>
                  );
                })}
              </p>
            </div>

            <div className="btn-container">
              <button className="prev-btn" onClick={prevQuestion}>
                Back
              </button>
              <button className="next-btn" onClick={nextQuestion}>
                Next
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div style={{ padding: "20px" }}>
        <Table bordered>
          <thead>
            <tr className="table-heading">
              <th>No</th>
              <th>Employee Name</th>
              <th>Feedback Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {feedbackEmployeeList.map((employee, index) => {
            return (
              <tbody>
                <tr className="table-content">
                  <td>{index + 1}</td>
                  <td>{employee.emp_name}</td>
                  <td>sent</td>
                  <td>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleClickOpen(employee)}
                    >
                      + Feedback
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default Empfeedback;



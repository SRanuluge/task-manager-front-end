import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({
  id,
  editIcon,
  deleteIcon,
  title,
  description,
  handleButtonClick,
  status,
}) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <div className="flex w-full justify-between">
          <IconButton
            variant="outlined"
            size="sm"
            color="green"
            className="mb-6 cursor-pointer rounded-full"
            onClick={() => handleButtonClick(id, "edit")}
          >
            {editIcon}
          </IconButton>
          <IconButton
            variant="outlined"
            size="sm"
            color="green"
            className="mb-6 cursor-pointer rounded-full"
            onClick={() => handleButtonClick(id, "delete")}
          >
            {deleteIcon}
          </IconButton>
        </div>
        <Typography variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600">
          {description}
        </Typography>
        <Typography className="font-normal text-blue-gray-600">
          <span className="text-green-700">{`Status : ${
            status ? "Completed" : "In progress"
          }
            
          `}</span>
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;

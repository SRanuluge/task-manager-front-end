import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function SimpleFooter({ brandName, brandLink }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 ">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, by{" "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500"
          >
            {brandName}
          </a>{" "}
        </Typography>
      </div>
    </footer>
  );
}

SimpleFooter.defaultProps = {
  brandName: "sranuluge.dev",
  brandLink: "",
};

SimpleFooter.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
};

SimpleFooter.displayName = "/src/widgets/layout/simple-footer.jsx";

export default SimpleFooter;

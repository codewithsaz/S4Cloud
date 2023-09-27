import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Button,
  Progress,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  FolderOpenIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PhotoIcon,
  FilmIcon,
  MusicalNoteIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import UploadButton from "../UploadButton/UploadButton";
import { useUser } from "../../components/Context/UserContext";
import { useFile } from "../Context/FileContext";

export function SidebarWithSearch() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const { user, setUser } = useUser();
  const { setshowContent } = useFile();

  function RoundNumber(usedStorage, maxStorage) {
    const usagePercentage = (usedStorage / maxStorage) * 100;
    return Math.round(usagePercentage);
  }
  function formatFileSize(sizeInBytes) {
    if (sizeInBytes < 1000) {
      return sizeInBytes + " B";
    } else if (sizeInBytes < 1000 * 1000) {
      return (sizeInBytes / 1000).toFixed(2) + "KB";
    } else if (sizeInBytes < 1000 * 1000 * 1000) {
      return (sizeInBytes / (1000 * 1000)).toFixed(2) + "MB";
    } else {
      return (sizeInBytes / (1000 * 1000 * 1000)).toFixed(2) + "GB";
    }
  }
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-2 drop-shadow-lg shadow-blue-gray-900/5 hidden lg:inline-flex">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img
          src="https://images.rawpixel.com/image_png_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLWljb24tMTQ5LnBuZw.png"
          alt="brand"
          className="h-8 w-8"
        />
        <Typography variant="h5" color="blue-gray">
          S4Cloud
        </Typography>
      </div>
      <div className="p-2 flex">
        <UploadButton />
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
        />
      </div>
      <List>
        <ListItem
          onClick={(e) => {
            setshowContent("all");
          }}
        >
          <ListItemPrefix>
            <FolderOpenIcon className="h-5 w-5" />
          </ListItemPrefix>
          All Files
        </ListItem>
        <ListItem
          onClick={(e) => {
            setshowContent("Image");
          }}
        >
          <ListItemPrefix>
            <PhotoIcon className="h-5 w-5" />
          </ListItemPrefix>
          Pictures
        </ListItem>
        <ListItem
          onClick={(e) => {
            setshowContent("Video");
          }}
        >
          <ListItemPrefix>
            <FilmIcon className="h-5 w-5" />
          </ListItemPrefix>
          Videos
        </ListItem>
        <ListItem
          onClick={(e) => {
            setshowContent("Audio");
          }}
        >
          <ListItemPrefix>
            <MusicalNoteIcon className="h-5 w-5" />
          </ListItemPrefix>
          Audios
        </ListItem>
        <ListItem
          onClick={(e) => {
            setshowContent("PDF");
          }}
        >
          <ListItemPrefix>
            <DocumentIcon className="h-5 w-5" />
          </ListItemPrefix>
          Documents
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Misc
        </ListItem>
        <ListItem className="flex-col gap-1 justify-center items-center">
          <Progress
            value={RoundNumber(user.usedStorage, user.maxStorage)}
            variant="gradient"
          />
          <p className=" text-sm">
            {formatFileSize(user.usedStorage)} of{" "}
            {formatFileSize(user.maxStorage)} Used
          </p>
        </ListItem>
        {/* 
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion> */}

        <hr className="my-2 border-blue-gray-50" />
      </List>
      {/* <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography
          variant="small"
          className="font-normal opacity-80 break-all"
        >
          Upgrade to Material Tailwind PRO and get even more components,
          plugins, advanced features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert> */}
    </Card>
  );
}

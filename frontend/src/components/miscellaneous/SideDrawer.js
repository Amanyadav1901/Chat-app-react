import { Tooltip, Box } from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loadingChat, setLoadingChat] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Box>
        <Tooltip label="Search Users to chat"></Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;

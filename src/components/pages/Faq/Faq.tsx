import React, { ChangeEvent, useEffect, useState } from "react";
import Heading from "./Heading";
import Searchbar from "@/components/ui/Searchbar";
import Accordion from "@/components/commons/Accordion";
import Text from "@/components/ui/Text";
import ButtonBantuanPPP from "./ButtonBantuanPPP";
import { faqData } from "@/constants/faq";

export default function Faq() {
  const [accordionData] = useState(faqData);

  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState(accordionData);
  const [dataNotFound, setDataNotFound] = useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    if (value.includes("<") || value.includes(">")) {
      setDataNotFound(true);
      return;
    }

    const terms = value.split(" ");
    const filtered = accordionData.filter((item) =>
      terms.every(
        (term) =>
          item.title.toLowerCase().includes(term) ||
          item.content.toLowerCase().includes(term),
      ),
    );
    setFilteredData(filtered);

    if (filtered.length === 0) {
      setDataNotFound(true);
    } else {
      setDataNotFound(false);
    }
  };

  useEffect(() => {
    if (searchText === "") {
      setDataNotFound(false);
      setFilteredData(accordionData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <>
      <Heading />

      <div className="flex flex-col gap-5">
        <Searchbar
          placeholder="Cari pertanyaan"
          value={searchText}
          onChange={handleSearch}
          onClear={() => setSearchText("")}
        />

        {searchText && !dataNotFound && (
          <Text className="!text-[#667085]">
            Hasil pencarian <i>&quot;{searchText}&quot;</i>
          </Text>
        )}

        {searchText && dataNotFound && (
          <div className="flex flex-col gap-6">
            <Text className="!text-[#667085]">
              Hasil pencarian <i>&quot;{searchText}&quot;</i>&ensp;tidak
              ditemukan
            </Text>
            <ButtonBantuanPPP />
          </div>
        )}
      </div>

      {!dataNotFound && (
        <div className="flex flex-col gap-2">
          <Accordion accordionData={filteredData} />
        </div>
      )}
    </>
  );
}

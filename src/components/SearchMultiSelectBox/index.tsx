import { useState } from "react";
import Select from "react-select";

export interface OptionType {
  id: number;
  value: string;
  label: string;
  isCat: boolean;
}

const SearchMultiSelectBox = () => {
  /**
   * 選択肢のリスト
   *「key: value」は、自由に追加が可能なので、使い勝手がいい。
   */
  const options = [
    { id: 1, value: "aiko", label: "aiko", isCat: false },
    { id: 2, value: "back number", label: "back number", isCat: false },
    { id: 3, value: "King Gnu", label: "King Gnu", isCat: true },
    { id: 4, value: "SEKAI NO OWARI", label: "SEKAI NO OWARI", isCat: true },
    { id: 5, value: "SUPER BEABER", label: "SUPER BEAVER", isCat: true },
  ];

  const [selectedValue, setSelectedValue] = useState([options[0]]);

  const handleChange = (options: OptionType[] | null) => {
    console.log("Select変更");
    console.log("option", options);
    if (options) {
      setSelectedValue([...options]);
    }
  };

  return (
    <div style={{ width: "500px", margin: "20px" }}>
      <Select
        /** SelectBox の id */
        instanceId="search-select-box"
        defaultValue={selectedValue}
        options={options}
        onChange={(options) => (options ? handleChange([...options]) : null)}
        /** 検索で、該当なしの場合のメッセージ */
        noOptionsMessage={() => "アーティストが見つかりません"}
        placeholder="アーティストを選んでください"
        /** 検索可能・オプション */
        isSearchable={true}
        components={{
          /** Defaultで表示されているセパレーターを消す */
          IndicatorSeparator: () => null,
        }}
        /** 複数選択・可能 */
        isMulti
      />
    </div>
  );
};

export default SearchMultiSelectBox;

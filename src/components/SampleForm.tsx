import { Box, Button } from "@mui/material";
import useSampleForm from "../hooks/useSampleForm";
import RHFSelect from "./RHFSelect";
import RHFTextField from "./RHFTextField";
import { RHFMultiAutocomplete } from "./multiAutocomplete/RHFMutiAutocomplete";

const SampleForm = () => {
  const {
    form: { control, handleSubmit, onSubmit },
    options: { options, optionWithColor },
  } = useSampleForm();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      width={"1000px"}
      margin={"50px auto"}
      bgcolor="#E5E5E5"
      p={3}
      borderRadius={5}
    >
      <RHFTextField name="name" control={control} label="必須入力" />
      <RHFTextField name="nullableName" control={control} label="任意入力" />
      <RHFSelect
        name="selectedValue"
        label="必須選択"
        control={control}
        options={options}
      />
      <RHFSelect
        name="nullableSelectedValue"
        label="任意選択"
        control={control}
        options={options}
      />
      <RHFMultiAutocomplete
        name="multiOptions"
        label="複数選択"
        control={control}
        options={optionWithColor}
        // renderOption: https://mui.com/material-ui/api/autocomplete/#Autocomplete-prop-renderOption
        renderOption={(props, option) => {
          // props: mui側で用意されている定数や関数が複数入っている
          return (
            <Box {...props} component="li" color={option.color}>
              {option.label}
            </Box>
          );
        }}
      />
      <Button type="submit" variant="outlined" sx={{ mt: 2, width: 200 }}>
        検索
      </Button>
    </Box>
  );
};

export default SampleForm;

import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options.map((o,index) => <option key={index}>{o}</option>)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    const finalSelectClassName = s.select + (s.option ? ' ' + s.option : '')

    return (
        <select onChange={onChangeCallback} className={finalSelectClassName} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;

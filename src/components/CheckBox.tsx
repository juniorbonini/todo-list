import { cva, type VariantProps } from "class-variance-authority"

// @ts-expect-error: module declaration for SVG React import
import CheckBoxIcon from '../assets/icons/square-duotone-checked.svg?react'
import Icon from "./Icon"

export const checkBoxWrapperVariants = cva(`
    inline-flex items-center justify-center cursor-pointer relative group
    `)

export const inputCheckBoxVariants = cva(`
    appearance-none peer flex items-center justify-center
    border-2 border-solid transition overflow-hidden
    border-green-base hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
    `, {
        variants: {
            size: {
                sm: 'w-5 h-5 rounded-sm'
            },
            disabled: {
                true: 'pointer-events-none'
            }
        },
        defaultVariants: {
            size: 'sm',
            disabled: false
        }
    })

    export const inputCheckBoxIconVariants = cva(`
        absolute top-1/2 -translate-y-1/2 hidden peer-checked:block fill-white`, {
            variants: {
                size: {
                    md: 'w-5 h-5'
                }
            },
            defaultVariants: {
                size: 'md'
            }
        })

        export type CheckBoxProps = VariantProps<typeof inputCheckBoxVariants> & React.ComponentProps<'input'> & {};

  export function CheckBox({
    size,
    disabled,
    className,
    ...props
  }: CheckBoxProps) {
    return <label className={checkBoxWrapperVariants({className})}>
        <input type='checkbox' className={inputCheckBoxVariants({ size, disabled })} {...props}/>
        <Icon svg={CheckBoxIcon} className={inputCheckBoxIconVariants({size})} />
    </label>
  }
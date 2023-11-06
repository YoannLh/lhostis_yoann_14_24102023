// import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { update } from '../utils/dataSlice'

import { FormProps } from '../interfaces/FormProps'
import { FormInputsProps } from '../interfaces/FormInputsProps'
import { selectListState } from '../domains/selectListState'
import { selectListDepartment } from '../domains/selectListDepartment'
import { dateParser } from '../utils/dateParser'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  max-width: 600px;
`

const WrapperInputAndErrorsMessage = styled.div`
  position: relative;
`

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 60px;
  margin: 0 auto 25px auto;
  padding-left: 15px;
  box-sizing: border-box;
  border-width: 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(80, 80, 80, 0.4);
  font-size: 1.1em;
`

const ContainerDatePickers = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  justify-content: space-between;
`

const WrapperDatepickerAndErrorsMessages = styled.div`
  position: relative;
  width: 47%;
  height: 60px;

  & > .react-datepicker-wrapper {
    width: 100%;
  }
`

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 60px;
  padding-left: 15px;
  box-sizing: border-box;
  background: white;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(80, 80, 80, 0.4);
  font-size: 1.1em;
`

const ContainerStateAndZipCode = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;

  & > .css-b62m3t-container {
    width: 100%;
    margin: 0;
  }
`

const WrapperStateAndZipCodeAndErrorsMessages = styled.div`
  position: relative;
  width: 47%;
  height: 60px;
`

const StyledSelect = styled(Select)`
  display: flex;
  width: 100%;
  height: 60px;
  margin: 0 auto 25px auto;
  padding: 0 15px;
  box-sizing: border-box;
  border-width: 0;
  border-radius: 5px;
  background: white;
  box-shadow: 0 2px 5px rgba(80, 80, 80, 0.4);
  align-items: center;
  font-size: 1.1em;
  color: grey;

  & > .css-cp01gg-control {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  & > #react-select-3-listbox {
    width: 100%;
    left: 0;
    padding: 15px 0 0 15px;
    background: white;
  }

  & > #react-select-5-listbox {
    width: 100%;
    left: 0;
    padding: 15px 0 0 15px;
    background: white;
  }

  & > .css-b62m3t-container {
    margin: auto;
  }
`

const ErrorMessage = styled.p`
  position: absolute;
  bottom: 5px;
  font-size: 0.9em;
  margin: 0;
  color: red;
`

const ErrorMessageDatepickerStateAndZipCode = styled.div`
  position: absolute;
  top: 63px;
  font-size: 0.9em;
  margin: 0;
  color: red;
`

const Button = styled.button`
  width: 100%;
  height: 60px;
  background: black;
  border-radius: 5px;
  color: white;
  font-size: 1.1em;
`

export const Form = ({ setModalVisibility }: FormProps) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputsProps>()
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<FormInputsProps> = ({
    birthDate,
    city,
    department,
    firstName,
    lastName,
    startDate,
    state,
    street,
    zip,
  }) => {
    const newEmployee = {
      employee: {
        birthDate: dateParser(birthDate),
        city,
        department: {
          value: department.value,
          label: department.label,
        },
        firstName,
        lastName,
        startDate: dateParser(startDate),
        state: { value: state.value, label: state.label },
        street,
        zip,
      },
    }
    dispatch(update(newEmployee))
    setModalVisibility(true)
    reset()
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <WrapperInputAndErrorsMessage>
        <Input
          type="text"
          placeholder="Firstname"
          {...register('firstName', {
            required: 'First name is required',
            pattern: {
              value: /^[a-zç-é-è-ë-âA-ZÉ\-']+$/,
              message: 'This input is text only.',
            },
          })}
        />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
        <ErrorMessage />
      </WrapperInputAndErrorsMessage>
      <WrapperInputAndErrorsMessage>
        <Input
          type="text"
          placeholder="Lastname"
          {...register('lastName', {
            required: 'Last name is required',
            pattern: {
              value: /^[a-zç-é-è-ë-âA-ZÉ\-']+$/,
              message: 'This input is text only.',
            },
          })}
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </WrapperInputAndErrorsMessage>
      <ContainerDatePickers>
        <WrapperDatepickerAndErrorsMessages>
          <Controller
            control={control}
            name="birthDate"
            rules={{
              required: 'BirthDate is required',
            }}
            render={({ field }) => (
              <StyledDatePicker
                wrapperClassName="datePicker"
                placeholderText="Date of Birth"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.birthDate && (
            <ErrorMessageDatepickerStateAndZipCode>
              {errors.birthDate.message}
            </ErrorMessageDatepickerStateAndZipCode>
          )}
        </WrapperDatepickerAndErrorsMessages>
        <WrapperDatepickerAndErrorsMessages>
          <Controller
            control={control}
            name="startDate"
            rules={{ required: 'startDate is required' }}
            render={({ field }) => (
              <StyledDatePicker
                wrapperClassName="datePicker"
                placeholderText="Start Date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.startDate && (
            <ErrorMessageDatepickerStateAndZipCode>
              {errors.startDate.message}
            </ErrorMessageDatepickerStateAndZipCode>
          )}
        </WrapperDatepickerAndErrorsMessages>
      </ContainerDatePickers>
      <WrapperInputAndErrorsMessage>
        <Input
          type="text"
          placeholder="Street"
          {...register('street', {
            required: 'street is required',
            pattern: {
              value: /^[a-zç-é-è-ë-âA-ZÉ\-1-9\s,']+$/,
              message: 'This input is text only.',
            },
          })}
        />
        {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
      </WrapperInputAndErrorsMessage>
      <WrapperInputAndErrorsMessage>
        <Input
          type="text"
          placeholder="City"
          {...register('city', {
            required: 'city is required',
            pattern: {
              value: /^[a-zç-é-è-ë-âA-ZÉ\s\-']+$/,
              message: 'This input is text only.',
            },
          })}
        />
        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
      </WrapperInputAndErrorsMessage>
      <ContainerStateAndZipCode>
        <WrapperStateAndZipCodeAndErrorsMessages>
          <Controller
            name="state"
            rules={{ required: 'state is required' }}
            render={({ field }) => (
              <StyledSelect
                unstyled
                placeholder="State"
                {...field}
                options={selectListState}
              />
            )}
            control={control}
          />
          {errors.state && (
            <ErrorMessageDatepickerStateAndZipCode>
              {errors.state.message}
            </ErrorMessageDatepickerStateAndZipCode>
          )}
        </WrapperStateAndZipCodeAndErrorsMessages>
        <WrapperStateAndZipCodeAndErrorsMessages>
          <Input
            type="number"
            placeholder="Zip Code"
            {...register('zip', {
              required: 'zip is required',
              pattern: {
                value: /^[0-9]*$/,
                message: 'This input is number only.',
              },
            })}
          />
          {errors.zip && (
            <ErrorMessageDatepickerStateAndZipCode>
              {errors.zip.message}
            </ErrorMessageDatepickerStateAndZipCode>
          )}
        </WrapperStateAndZipCodeAndErrorsMessages>
      </ContainerStateAndZipCode>
      <WrapperInputAndErrorsMessage>
        <Controller
          name="department"
          rules={{ required: 'department is required' }}
          render={({ field }) => (
            <StyledSelect
              unstyled
              placeholder="Department"
              {...field}
              options={selectListDepartment}
            />
          )}
          control={control}
        />
        {errors.department && (
          <ErrorMessage>{errors.department.message}</ErrorMessage>
        )}
      </WrapperInputAndErrorsMessage>
      <Button type="submit">Save</Button>
    </StyledForm>
  )
}

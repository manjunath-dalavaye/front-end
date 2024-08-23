import React from 'react';
import type { FormItemProps } from 'antd';
import { Button, Cascader, DatePicker, Form as OriginForm } from 'antd';
import dayjs from 'dayjs';

interface AggregateProps<V = unknown> extends FormItemProps<V> {
  names?: FormItemProps<V>['name'][];
}

const Aggregate = (props: AggregateProps) => {
  const [form] = OriginForm.useForm(); // Use this hook to get the form instance

  const { names = [], rules = [], ...rest } = props;
  const [firstName, ...resetNames] = names;

  if (!firstName) {
    // Handle the case where `names` array might be empty
    console.warn('No field names provided.');
    return null;
  }

  return (
    <>
    <h2>Forms in AntD</h2>
      <OriginForm.Item
        name={firstName}
        // Convert the values of names into an array passed to children
        getValueProps={() => {
          const value = names.map((name) => form.getFieldValue(name));
          return { value: value.length ? value : [] }; // Ensure it always returns an object
        }}
        getValueFromEvent={(values) => {
          // Set the form store values for names
          const fieldData = names.map((name, index) => ({ name, value: values?.[index] }));
          form.setFields(fieldData);
          return values?.[0];
        }}
        rules={rules.map((rule) => {
          if (typeof rule === 'object' && rule) {
            return {
              ...rule,
              transform: () => {
                // Set the values of the names fields for the rule value
                const values = names.map((name) => form.getFieldValue(name));
                return values;
              },
            };
          }
          return rule;
        })}
        {...rest}
      />
      {/* Bind other fields so they can getFieldValue to get values and setFields to set values */}
      {resetNames.map((name) => (
        <OriginForm.Item key={name?.toString()} name={name} noStyle />
      ))}
    </>
  );
};

const data = {
  province: 'Beijing',
  city: 'Haidian',
  startTime: dayjs(),
  endTime: dayjs().add(1, 'month'),
};

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{ value: 'hangzhou', label: 'Hangzhou' }],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{ value: 'nanjing', label: 'Nanjing' }],
  },
];

const Form = Object.assign(OriginForm, { Aggregate });

// eslint-disable-next-line react-refresh/only-export-components
export default () => (
  <Form initialValues={data} onFinish={(value) => console.log(value)}>
    <Form.Aggregate label="Address" names={['province', 'city']} rules={[{ required: true }]}>
      <Cascader options={options} placeholder="Please select" />
    </Form.Aggregate>

    <Form.Item label="Address (use Default)" name="defaultAddress">
      <Cascader options={options} placeholder="Please select" />
    </Form.Item>

    <Form.Aggregate label="Date" names={['startTime', 'endTime']}>
      <DatePicker.RangePicker />
    </Form.Aggregate>

    <Form.Item>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

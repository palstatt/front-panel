import React from 'react'
import { AutocompleteSearch, InputWithValidation } from 'is-ui-library'

const searchFunction = () => {}

export const reportIssueFormConfig = [
	{
		fieldName: 'company',
		span: 2,
		component: (
			<AutocompleteSearch
				label={'Company'}
				placeholder={'Type to search companies'}
				onSearch={searchFunction}
			/>
		),
		defaultValue: '',
		required: true,
		validation: {
			rules: [
				{
					rule: value => value !== '',
					failureMessage: 'Field cannot be blank',
				},
			],
			prompt: 'Field is required',
		},
	},
	{
		fieldName: 'version',
		span: 2,
		component: (
			<AutocompleteSearch
				label={'Version'}
				placeholder={'Type to search versions'}
				onSearch={searchFunction}
			/>
		),
		defaultValue: '',
		required: true,
		validation: {
			rules: [
				{
					rule: value => value !== '',
					failureMessage: 'Field cannot be blank',
				},
			],
			prompt: 'Field is required',
		},
	},
	{
		fieldName: 'issue',
		span: 2,
		component: (
			<InputWithValidation
				multiline
				label={'Issue'}
				placeholder={'Type issue description'}
			/>
		),
		defaultValue: '',
		required: true,
		validation: {
			rules: [
				{
					rule: value => value !== '',
					failureMessage: 'Field cannot be blank',
				},
			],
			prompt: 'Field is required',
		},
	},
]

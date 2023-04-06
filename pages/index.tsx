import { Input, Option, Select } from '@material-tailwind/react';
import IssueList from 'my-app/components/IssueList';
import {
  IssueSortOptions,
  IssueSortOptionsArray
} from 'my-app/constants/issue';
import useDebounce from 'my-app/hooks/common/useDebounceValue';
import { useState } from 'react';

export default function Home() {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState<
    (typeof IssueSortOptionsArray)[number]
  >(IssueSortOptionsArray[0]);

  const debouncedOwner = useDebounce(owner, 500);
  const debouncedRepo = useDebounce(repo, 500);

  return (
    <main className="w-screen h-screen p-8 flex flex-col">
      <div className="grid grid-cols-3 gap-4">
        <Input
          label="Owner"
          onChange={(e) => {
            setOwner(e.target.value);
          }}
        />
        <Input
          label="Repository name"
          onChange={(e) => {
            setRepo(e.target.value);
          }}
        />
        <Select
          label="Sort"
          value={selectedSortOption.key}
          onChange={(key) => {
            const option = IssueSortOptionsArray.find(
              (o) => o.key === (key as IssueSortOptions)
            );
            if (option) {
              setSelectedSortOption(option);
            }
          }}
        >
          {IssueSortOptionsArray.map((option) => (
            <Option key={option.key} value={option.key}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
      {!!debouncedOwner && !!debouncedRepo ? (
        <IssueList
          owner={debouncedOwner}
          repo={debouncedRepo}
          selectedSortOption={selectedSortOption}
        />
      ) : null}
    </main>
  );
}

export type MarkdownOption = {
  text: {
    type: string;
    text: string;
  };
  description?: {
    type: string;
    text: string;
  };
  value: string;
};

export type FinalizeUserSettings = {
  draft_uploaded: boolean;
  internal_review: boolean;
  counterparty_review: boolean;
  ready_for_signature: boolean;
  partially_signed: boolean;
  fully_signed: boolean;
  done: boolean;
  paused: boolean;
  user_mentioned: boolean;
  request_assigned: boolean;
  pen_assigned: boolean;
  nudges: boolean;
  agreement_owner_assigned: boolean;
  agreement_deleted: boolean;
  collaborator_added: boolean;
  delete_task: boolean;
  complete_task: boolean;
  overdue_task: boolean;
  agreement_created_from_request: boolean;
};

export const client = {
  messaging: {
    getUserFinalizeSettings: (): FinalizeUserSettings => {
      return {
        draft_uploaded: true,
        internal_review: false,
        counterparty_review: false,
        ready_for_signature: false,
        partially_signed: false,
        fully_signed: false,
        done: false,
        paused: false,
        user_mentioned: false,
        request_assigned: false,
        pen_assigned: false,
        nudges: false,
        agreement_owner_assigned: false,
        agreement_deleted: false,
        collaborator_added: true,
        delete_task: false,
        complete_task: false,
        overdue_task: false,
        agreement_created_from_request: false,
      };
    },
  },
};

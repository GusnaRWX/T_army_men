import { get } from '@/utils/interceptors'

/**
 * Get Requirements
 * 
 * @returns
 */
export const getRequirements = () => {
  return get(`/copy-text/requirement`)
}

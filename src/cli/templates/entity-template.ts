import * as dedent from 'dedent';
import { lowerCaseFirst } from '../../core';

/**
 * Provide a basic template for the entity component generation.
 * @param entityName
 */
export function getEntityTemplate(entityName: string): string {
	const resolutionKey = lowerCaseFirst(entityName);
	return dedent`
        import { Column, Entity } from "typeorm"; 
        import { Entity as MedusaEntity } from "medusa-extender";
        
        @MedusaEntity({ resolutionKey: "${resolutionKey}" })
        @Entity()
        export class ${entityName.replace('Entity', '')} {
            @Column()
            name: string;
        }
    `;
}

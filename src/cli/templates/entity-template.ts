import * as dedent from 'dedent';

/**
 * Provide a basic template for the entity component generation.
 * @param entityName
 */
export function getEntityTemplate(entityName: string): string {
	return dedent`
        import { Column, Entity } from "typeorm"; 
        import { Entity as MedusaEntity } from "medusa-extender";
        
        @MedusaEntity({ resolutionKey: "${entityName}" })
        @Entity()
        export class ${entityName.replace('Entity', '')} {
            @Column()
            name: string;
        }
    `;
}
